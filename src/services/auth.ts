import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export function logout() {
  const auth = getAuth(); // Inicializa la autenticación
  const router = useRouter(); // Obtén el router para la redirección

  signOut(auth)
    .then(() => {
      // Redirige al login después de cerrar sesión
      router.push("/login");
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
}
