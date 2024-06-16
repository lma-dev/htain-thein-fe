// hooks/useFireStoreCollection.js
import { useState, useEffect } from "react";
import { firestore } from "../libs/firebaseConfig";

const useFireStoreCollection = (collectionName, orderByField) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

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
        setCount(snapshot.size);
      });

    return () => unsubscribe();
  }, [collectionName, orderByField]);

  return { data, count };
};

export default useFireStoreCollection;
