import {toast} from "react-semantic-toasts"


export default ({type, title, message, icon, time, timeout, onClose=''}) => {
    return () => {
        setTimeout(() => {
            toast({
                type: type,
                icon: icon,
                title: title,
                description: message,
                time: time,
                onClose: () => {
                    return onClose
                }
            })
        }, timeout)

    }
}