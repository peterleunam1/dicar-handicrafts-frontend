import { useRouter } from "next/router";

export function useNavigate() {
  const navigate = useRouter().push;
  const navigateTo = (path: string) => navigate(path);
  return { navigateTo };
}
