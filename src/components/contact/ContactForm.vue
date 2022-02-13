<template>
  <div>
    <div class="mb-8 flex flex-col">
      <SectionTitle title="Contact Me" class-name="contact" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia
        dolorem itaque.
      </p>
    </div>
    <form @submit="onSubmit">
      <BaseInputText label="Name" name="name">
        <BotIcon />
      </BaseInputText>
      <BaseInputText label="Email" name="email" type="email">
        <MailIcon />
      </BaseInputText>
      <BaseInputText label="Message" name="message" :is-textarea-tag="true">
        <MessageIcon />
      </BaseInputText>
      <div class="flex flex-col items-center gap-4 text-center">
        <button class="btn">Send Message</button>
        <small v-if="errorMessage" class="text-rose-500/90">{{
          errorMessage
        }}</small>
      </div>
    </form>
  </div>
</template>

<script setup>
import MailIcon from "@/assets/images/svg/bx-mail-send.svg";
import BotIcon from "@/assets/images/svg/bxs-bot.svg";
import MessageIcon from "@/assets/images/svg/bxs-message-dots.svg";
import BaseInputText from "@/components/UI/BaseTextInput.vue";
import SectionTitle from "@/components/UI/SectionTitle.vue";
import { useForm } from "vee-validate";
import { string as yupString, object as yupObject } from "yup";
import { ref } from "vue";

const errorMessage = ref(null);
const schema = yupObject({
  email: yupString().required("請輸入信箱").email("信箱格式錯誤"),
  name: yupString().required("請輸入姓名"),
  message: yupString().required("請輸入訊息"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit((value) => {
  errorMessage.value = null;
  console.log(value);
}, onInvalidSubmit);

function onInvalidSubmit() {
  errorMessage.value = "表單送出失敗，請確切填寫欄位後再嘗試一次。";
}
</script>