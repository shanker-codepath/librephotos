import { useMutation } from "@tanstack/react-query";

export const useCopyImageToClipboardMutation = () =>
  useMutation({
    mutationFn: async (imageUrl: string) => {
      try {
        alert("Copy button clicked!")
      } catch {
        alert("Copy to clipboard failed!")
      }
    },
  });