<template>
  <div>
    <div class="mb-8 flex flex-col gap-2">
      <BaseTitle title="Contact Me" class-name="contact" class="!my-0" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia
        dolorem itaque.
      </p>
    </div>

    <form
      name="contact-me"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact-me" />
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
    <Teleport to="body">
      <BaseOverlay v-if="isModalOpen" class="z-30" @click.self="closeModal">
        <div
          class="relative flex flex-col items-center rounded-lg bg-orange-50 py-5 px-5 dark:bg-zinc-900 md:px-20"
        >
          <p class="my-24 text-center text-xl font-bold">
            非常感謝您的來信，站主確認完畢後將會立即回覆您。
          </p>
          <button class="btn font-bold" @click="closeModal">確認</button>
          <CloseIcon
            class="absolute top-1 right-1 h-12 w-12 cursor-pointer hover:opacity-80"
            @click="closeModal"
          />
        </div>
      </BaseOverlay>
    </Teleport>
  </div>
</template>

<script setup>
import MailIcon from "@/assets/images/svg/mail-send.svg";
import BotIcon from "@/assets/images/svg/bot.svg";
import CloseIcon from "@/assets/images/svg/x.svg";
import MessageIcon from "@/assets/images/svg/message-dots.svg";
import BaseInputText from "@/components/UI/BaseTextInput.vue";
import BaseTitle from "@/components/UI/BaseTitle.vue";
import { useForm } from "vee-validate";
import { string as yupString, object as yupObject } from "yup";
import { ref, defineAsyncComponent } from "vue";

const BaseOverlay = defineAsyncComponent(() =>
  import("@/components/UI/BaseOverlay.vue")
);

const isModalOpen = ref(false);
const errorMessage = ref(null);
const schema = yupObject({
  email: yupString().required("請輸入信箱").email("信箱格式錯誤"),
  name: yupString().required("請輸入姓名"),
  message: yupString().required("請輸入訊息"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit(async (value) => {
  errorMessage.value = null;

  await fetch("./", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode({
      "form-name": "contact-me",
      ...value,
    }),
  });

  resetForm();
  isModalOpen.value = true;
}, onInvalidSubmit);

function onInvalidSubmit() {
  errorMessage.value = "表單送出失敗，請確切填寫欄位後再嘗試一次。";
}

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function closeModal() {
  isModalOpen.value = false;
}
</script>
