// hooks/useFireStoreCollection.js
import { useState, useEffect } from "react";
import { firestore } from "../libs/firebaseConfig";

const useFireStoreCollection = (collectionName, orderByField) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collectionName)
      .orderBy(orderByField)
      .onSnapshot((snapshot) => {
        const collectionData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(collectionData);
      });

    return () => unsubscribe();
  }, [collectionName, orderByField]);

  return data;
};

export default useFireStoreCollection;
