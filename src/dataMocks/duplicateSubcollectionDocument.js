import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCucWqOxysavQUqRjJJ0ER7-NhMVxNJOAo",
  authDomain: "evident-trees-295915.firebaseapp.com",
  projectId: "evident-trees-295915",
  storageBucket: "evident-trees-295915.appspot.com",
  messagingSenderId: "408911514958",
  appId: "1:408911514958:web:d214a2cb3ced33218a221f",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Autenticación del usuario
signInWithEmailAndPassword(auth, "alfredobape@gmail.com", "123456")
  .then(() => {
    console.log("Usuario autenticado correctamente");
    duplicarDocumento("companyId", "reportId");
  })
  .catch((error) => {
    console.error("Error al autenticar:", error);
  });

// Función para duplicar el documento
async function duplicarDocumento(companyId, reportId) {
  try {
    const reportRef = doc(db, "companies", companyId, "reports", reportId);
    const reportSnap = await getDoc(reportRef);

    if (reportSnap.exists()) {
      const data = reportSnap.data();
      const newReportRef = doc(collection(db, "companies", companyId, "reports"));
      await setDoc(newReportRef, data);
      console.log("Documento duplicado con éxito");
    } else {
      console.log("El documento no existe");
    }
  } catch (error) {
    console.error("Error al duplicar el documento:", error);
  }
}
