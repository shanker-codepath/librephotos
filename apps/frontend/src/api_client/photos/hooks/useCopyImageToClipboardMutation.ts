import { useMutation } from "@tanstack/react-query";
import i18n from "../../../i18n";
import { notification } from "../../../service/notifications";
import { copyImageToClipboard } from "../../../util/util";

export const useCopyImageToClipboardMutation = () =>
  useMutation({
    mutationFn: async (imageUrl: string) => {
      try {
        await copyImageToClipboard(imageUrl);
      } catch {
        notification.requestFailed(i18n.t("selectionactions.copytoclipboard"), i18n.t("selectionactions.copytoclipboardfailed"));
      }
    },
  });