<template>
  <div>
    <div class="mb-8 flex flex-col gap-2">
      <BaseTitle title="Contact Me" class-name="contact" class="!my-0" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia
        dolorem itaque.
      </p>
    </div>

    <form enctype="multipart/form-data" method="post" @submit="onSubmit">
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
        <button class="btn" :disabled="isSubmitting">Send Message</button>
        <small v-if="errorMessage" class="text-rose-500/90">{{
          errorMessage
        }}</small>
      </div>
    </form>

    <Teleport to="body">
      <BaseSpinner v-if="isLoading" />
      <BaseOverlay v-if="isModalOpen" class="!z-30" @click.self="closeModal">
        <div
          class="relative flex flex-col items-center rounded-lg bg-orange-50 py-5 px-5 dark:bg-zinc-900 md:px-20"
        >
          <p class="my-24 text-center text-xl font-bold">
            {{ modalMessage }}
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

const BaseSpinner = defineAsyncComponent(() =>
  import("@/components/UI/BaseSpinner.vue")
);

const isModalOpen = ref(false);
const isLoading = ref(false);
const errorMessage = ref(null);
const modalMessage = ref(null);
const schema = yupObject({
  email: yupString().required("請輸入信箱").email("信箱格式錯誤"),
  name: yupString().required("請輸入姓名"),
  message: yupString().required("請輸入訊息"),
});

const { handleSubmit, resetForm, isSubmitting } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit(async (value) => {
  try {
    isLoading.value = true;
    errorMessage.value = null;
    modalMessage.value = null;

    const { name, email, message } = value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    await fetch("https://getform.io/f/a5c8f3ec-bbf0-4857-abf6-df1456d93a65", {
      method: "POST",
      body: formData,
    });

    modalMessage.value = "非常感謝您的來信，站主確認完畢後將會立即回覆您。";
  } catch (err) {
    console.err(err.message);
    modalMessage.value =
      "非常抱歉表單送出失敗，請稍後片刻再麻煩您嘗試填寫表單寄送信件。";
  } finally {
    resetForm();
    isLoading.value = false;
    isModalOpen.value = true;
  }
}, onInvalidSubmit);

function onInvalidSubmit() {
  errorMessage.value = "表單送出失敗，請確切填寫欄位後再嘗試一次。";
}

function closeModal() {
  isModalOpen.value = false;
}
</script>
