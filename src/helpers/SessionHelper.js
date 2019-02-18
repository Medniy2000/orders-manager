

export function getSession(name) {
        return sessionStorage.getItem(name) ? sessionStorage.getItem(name).split('; ')[0] : '';
    }

export function setSession(name, value, options) {
        options = options || {}

        let expires = options.expires

        if (typeof expires == "number" && expires) {
            let d = new Date()
            d.setTime(d.getTime() + expires * 1000)
            expires = options.expires = d
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString()
        }

        value = encodeURIComponent(value)

        for (let propName in options) {
            value += "; " + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                value += "=" + propValue
            }
        }

        sessionStorage.setItem(name, value)
    }

export function deleteSession(name) {
        sessionStorage.removeItem(name)
    }

