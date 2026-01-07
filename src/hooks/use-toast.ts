export const toast = ({ title, description }: { title: string, description: string }) => {
  console.log(`${title}: ${description}`);
};
export const useToast = () => ({ toast });
