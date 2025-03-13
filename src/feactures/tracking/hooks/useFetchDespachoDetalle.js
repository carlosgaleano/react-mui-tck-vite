import { useState, useEffect } from "react";
import { getDespachoDetalle } from "../helpers/getDespachoDetalle";
import {useAuthStore} from '../../../feactures/auth/store/auth'; 

export const useEffectGetDespachoDetalle = (page,despachoId) => {
  const [state, setState] = useState({
    data: [],
    totalRow:null,
    totalPage:null,
    currentPage:null,
    
  
  });
  const { loading, setLoading } = useAuthStore(); 
 // setpending(true);
  useEffect(() => {
    let isActive = true;
    setLoading(true);
    getDespachoDetalle(page,despachoId)
    .then((despachos) => {
      console.log("paged", page, "response", despachos, "numero", despachos.current_page);
      setState({
        //data:despachos,
         data: Object.values(despachos?.data),
        totalPage:despachos?.last_page,
        totalrow:despachos?.total,
        currentPage: despachos?.current_page ,
        rowsPerPage:despachos?.per_page
        
      });
     
    }) .catch((error) => {
      if (isActive) {
          if (error.name === 'AbortError') {
              console.log('Fetch aborted');
              return; // Salimos del catch si es un error de aborto
          }
        console.error("Error fetching despachos:", error);
      }
    })
    .finally(() => {
      if (isActive) {
        setLoading(false);
      }
    });
  }, [page,despachoId]);

  return state;
};