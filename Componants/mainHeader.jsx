import { useMoralis} from "react-moralis"
import { useEffect } from "react"
export default function mainHeader(){
    
        const {enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading} = useMoralis()
        useEffect(()=> {
            if(isWeb3Enabled) return
            if(typeof window != "undefined"){
                if(window.localStorage.getItem("Connected")){
                    enableWeb3()
                }
            }
            
        }, [isWeb3Enabled])

        useEffect(() => {
            Moralis.onAccountChanged((account) => {
                console.log(`account change to ${account}`)
                if(account == null){
                    window.localStorage.removeItem("connected")
                    deactivateWeb3()
                    console.log("null account found pls retry")
                }

            })

        }, [])
        return(<div> 
            {account ? (<div>Connected! to {account}</div>) : (<button onClick ={async () => {
                await enableWeb3()
                if(typeof window !== "undefined"){
                window.localStorage.setItem("Connected", "injected")
                }
            }}
            disabled={isWeb3EnableLoading}
            >CONNECT</button>)}
            
    </div>)
}