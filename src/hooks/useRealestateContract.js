import useContract from "./useContract";

import Index from "../contracts/index.json";

const useRealestateContract=()=>{
    useContract(process.env.REACT_APP_NFT_ADDRESS,index,true)

}

export  default useRealestateContract;