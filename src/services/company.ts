// src/services/companyService.ts
import { db } from '@/firebase'; // Asegúrate de que esta sea la instancia de Firestore
import { collection, getDocs, doc, getDoc, collectionGroup } from 'firebase/firestore';

/**
 * Obtiene todos los documentos de la colección "company".
 */
export const getAllCompanies = async () => {
  try {
    const companiesRef = collection(db, 'company');
    const snapshot = await getDocs(companiesRef);

    const companies = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return companies;
  } catch (error) {
    console.error("Error al obtener las compañías:", error);
    throw error;
  }
};

/**
 * Obtiene todas las subcolecciones "reports" asociadas a una compañía específica.
 * @param companyId ID de la compañía.
 */
export const getReportsForCompany = async (companyId: string) => {
  try {
    const reportsRef = collection(db, `companies/${companyId}/reports`);
    const snapshot = await getDocs(reportsRef);
console.log(snapshot.docs);

    const reports = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return reports;
  } catch (error) {
    console.error(`Error al obtener los reportes para la compañía ${companyId}:`, error);
    throw error;
  }
};

/**
 * Obtiene todas las subcolecciones "reports" en toda la base de datos.
 */
export const getAllReports = async () => {
  try {
    const reportsSnapshot = await getDocs(collectionGroup(db, 'reports'));
    const reports = reportsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      parent: doc.ref.parent.parent?.id, // Obtén el ID del documento padre (la compañía)
    }));

    return reports;
  } catch (error) {
    console.error("Error al obtener todas las subcolecciones 'reports':", error);
    throw error;
  }
};
