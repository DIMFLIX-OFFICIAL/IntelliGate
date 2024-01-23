import Swal from "sweetalert2";

export function popup(title, text, icon) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        iconColor: "var(--button)",
        width: "80%",
        allowOutsideClick: true,
        backdrop: window.getComputedStyle(document.body).getPropertyValue('--bg') + '99',
        customClass: {
            popup: "custom-swal2-popup",
            title: "custom-swal2-title",
            htmlContainer: "custom-swal2-html-container",
            icon: "custom-swal2-icon"
        }
    });
}

export function confirmation_popup(text) {
    Swal.fire({
        title: text,
        confirmButtonText: "Confirm",
        icon: "question",
        iconColor: "var(--button)",
        width: "80%",
        allowOutsideClick: true,
        backdrop: window.getComputedStyle(document.body).getPropertyValue('--bg') + '99',
        customClass: {
            popup: "custom-swal2-popup",
            title: "custom-swal2-title",
            htmlContainer: "custom-swal2-html-container",
            icon: "custom-swal2-icon"
        }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      }
    });
}

export const succ_popup = (msg) => (popup("Success!", msg, "success"))
export const err_popup = (msg) => (popup("Error!", msg, "error"))