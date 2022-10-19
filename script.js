  const button = document.querySelector('img');
        button.addEventListener("click", ()=>{
            Notification.requestPermission().then(perm =>{
                if (perm === "granted") {
                    const noti = new Notification("New Message", {
                        body: "This is message from IT HELPER",
                        data: { hello: "Hello world" },
                        icon:"https://res.cloudinary.com/dxufc0rvg/image/upload/v1666188074/WhatsApp_Image_2022-10-19_at_6.56.58_PM_eodllt.jpg"
                    })
                     noti.addEventListener("error", e => {
                    // console.log(e);
                     alert("error")
                })
                } 
                 
            })
        })
let notification
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        interval = setInterval(() => {
            notification = new Notification("Come Back Please", {
                body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
                tag: "Come Back",
                icon:"https://res.cloudinary.com/dxufc0rvg/image/upload/v1666188074/WhatsApp_Image_2022-10-19_at_6.56.58_PM_eodllt.jpg"

            })
        }, 100)
    } else {

        notification.close()
    }
})
