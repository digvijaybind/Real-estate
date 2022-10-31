import {isAddress} from "@ethersproject/address";
import {Contract} from "@ethersproject/contracts";
import {AddressZero} from "@ethersproject/constants";

import getProviderOrSigner from "./getProviderOrSigner";


export const getContract=(address, abi,library,account="")=>{

    if(!isAddress(address) || address===AddressZero){

        throw Error(`Invalid 'address' parameters'${address}'`)
    }
    return new Cotract (address,ABI,getProviderOrSigner(library,account));
};

