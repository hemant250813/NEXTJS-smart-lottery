import { ConnectButton } from "web3uikit";

export default function(){
    return(
        <div className="p-5 border-x-2 border-black">
           <h1 className="py-8 px-8 font-bold text-3xl">Decentralized lottery !!!!!</h1> 
           <div className="ml-auto py-6 px-8"><ConnectButton moralisAuth = {false} /></div> 
        </div>
    )
}