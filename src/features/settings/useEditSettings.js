import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export function useEditSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isUpdating } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: "settings" });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSetting, isUpdating };
}
