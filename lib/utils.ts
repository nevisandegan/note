import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const localization = {
  badge__unverified: "تایید نشده",
  formFieldLabel__confirmDeletion: "تایید کنید",
  formFieldLabel__signOutOfOtherSessions: "از همه دستگاه‌ها  خارج شوید",
  formFieldLabel__confirmPassword: "تکرار رمز عبور",
  formFieldLabel__newPassword: "رمز عبور جدید",
  badge__thisDevice: " دستگاه",
  badge__primary: "اولین ",
  socialButtonsBlockButton: "  ادامه با حساب کاربری   ",
  formFieldLabel__emailAddress: "آدرس ایمیل",
  formFieldLabel__password: "رمز عبور",
  formButtonPrimary: "ثبت نام",
  dividerText: "یا",
  signIn: {
    start: {
      title: " ورود به حساب کاربری",
      subtitle: " ورود به نوت",
      actionText: "حساب کاربری ندارید ؟ ",
      actionLink: "ثبت نام",
    },
  },
  signUp: {
    start: {
      title: "ساخت حساب کاربری",
      subtitle: "برای ورود به برنامه نوت",
      actionText: "حساب کاربری دارید؟",
      actionLink: "ورود",
    },
    emailCode: {
      subtitle: "to access {{applicationName}}",
    },
  },
  userButton: {
    action__manageAccount: "تنظیمات حساب کاربری",
    action__signOut: "خروج",
  },
  userProfile: {
    deletePage: {
      title: "حذف حساب کاربری",
      messageLine1: "آیا مطمئن هستید که می خواهید اکانت خود را حذف کنید؟",
      messageLine2: "این عمل دائمی و غیر قابل برگشت است.",
      actionDescription: "لطفا در کادر زیر (Delete account) را تایپ کنید",
      confirm: "حذف اکانت",
    },
    passwordPage: { title: "تنظیم رمز عبور" },
    connectedAccountPage: {
      title: "اضافه کردن حساب کاربری",
      formHint: "  سرویسی را برای اتصال حساب خود انتخاب کنید.",
      socialButtonsBlockButton: "اتصال به ",
    },
    formButtonPrimary__continue: "ثبت",
    formButtonReset: "لغو",
    emailAddressPage: {
      title: "اضافه کردن آدرس ایمیل",
      emailCode: {
        formHint: "یک ایمیل حاوی کد تایید به این آدرس ایمیل ارسال می شود.",
        formTitle: "تاییدیه کد ",
        formSubtitle: "کد تأیید ارسال شده  را وارد کنید",
      },
    },
    start: {
      formButtonReset: "لغو",
      dangerSection: {
        title: "هشدار!",
        deleteAccountTitle: "حذف اکانت",
        deleteAccountDescription:
          "حساب خود و تمام داده های مرتبط با آن را حذف کنید",
        deleteAccountButton: "حذف اکانت",
      },
      activeDevicesSection: {
        title: "دستگاه های فعال",
        detailsTitle: "دستگاه فعلی",
        detailsSubtitle: "این دستگاهی است که در حال حاضر از آن استفاده می کنید",
      },
      passwordSection: {
        title: "رمز عبور",
        primaryButton__setPassword: "تنظیم رمز عبور",
      },
      headerSubtitle__security: "مدیریت تنظیمات امنیتی",
      headerTitle__account: "حساب کاربری",
      headerTitle__security: "امنیت",
      headerSubtitle__account: "مدیریت اطلاعات حساب",
      profileSection: { title: "پروفایل" },
      connectedAccountsSection: {
        title: "حساب های متصل",
        primaryButton: "اتصال اکانت دیگر",
        destructiveActionTitle: "حذف",
        destructiveActionSubtitle:"",
        destructiveActionAccordionSubtitle: "حساب متصل را حذف کنید",
      },
      emailAddressesSection: {
        detailsTitle__unverified: "تأیید آدرس ایمیل",
        detailsSubtitle__unverified:
          "برای دسترسی به همه ویژگی‌ها با این آدرس ایمیل، تأیید را کامل کنید",
        detailsAction__unverified: "تأیید آدرس ایمیل",
        detailsTitle__primary: "آدرس ایمیل اصلی",
        title: "آدرس ایمیل",
        detailsSubtitle__primary: "",
        destructiveActionTitle: "",
        destructiveActionSubtitle: "حذف آدرس ایمیل از حساب کاربری",
        destructiveAction: "حذف ایمیل",
        primaryButton: "اضافه کردن ایمیل",
      },
    },
  },
};
