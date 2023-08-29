import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";



const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

function Contact() {
    const [showAlert, setShowAlert] = useState(false)
    const [showError, setShowError] = useState(false)

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault()

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
              setShowAlert(true);
              form.current.reset()
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        () => {
            setShowError(true)
            setTimeout(() => {
                setShowError(false);
              }, 4000);
        }
      )
  }

  return (
      <div className="w-full h-full bg-cover bg-center py-24  bg-[url(/background-5.png)]">
      <section className="mb-32 text-center">
        <div className="mx-auto max-w-[700px] md:px-3">
            <h2 className="mb-12 text-3xl font-bold">Contact me</h2>
            <p className="mt-6 text-l leading-8 text-gray-700">
              Thank you for visiting my portfolio website! I am thrilled that you
              are interested in connecting with me for project collaborations, job
              offers, or any other exciting opportunities.
            </p>
            <p className="mt-6 text-l leading-8 text-gray-700">
              Feel free to use the contact form below to send me a message
              directly, or you can also connect with me through the social media
              channels.{" "}
            </p>

          <div className="flex flex-cols items-center justify-around p-10">
              <a href="https://discord.com/channels/crissu91">
              <svg
                className="hover:animate-bounce h-9 w-9"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#7289da" }}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd">         
                <path
                  d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
                </a>
          
                <a href="https://github.com/crissu91">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:animate-bounce h-9 w-9"
                  fill="currentColor"
                  style={{color: "#333"}}
                  viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                </a>

                <a href="https://www.linkedin.com/in/cristina-stefan-323242108/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:animate-bounce h-9 w-9"
                  fill="currentColor"
                  style={{color: "#0077b5"}}
                  viewBox="0 0 24 24">
                <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                </a>

                <a href="https://reactdevsgroup.slack.com/team/U053T0J9RBM">
                <svg
                  className="hover:animate-bounce h-9 w-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#3eb991" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd">
                <path
                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
                </svg>
            </a>
            
            <a href="https://www.codewars.com/users/crissu91">
              <svg
                className="hover:animate-bounce h-9 w-9"
                style={{color: "red"}}
                role="img" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.072.142A1.072 1.072 0 0 0 0 1.214v21.572a1.072 1.072 0 0 0 1.072 1.072h21.856A1.072 1.072 0 0 0 24 22.786V1.214A1.072 1.072 0 0 0 22.928.142zm9.736 1.818a.904.904 0 0 1 .828.539.784.784 0 0 1 1.274.493.639.639 0 0 1 .29-.06c.33.008.59.262.625.575a1.322 1.322 0 0 1 .624-.515 1.325 1.325 0 0 1 1.718.71 1.098 1.098 0 0 1 .306-.236 1.102 1.102 0 0 1 1.483.479 1.094 1.094 0 0 1 .12.47.994.994 0 0 1 1.322 1.214.904.904 0 0 1 .874 1.438.784.784 0 0 1 .176 1.356.639.639 0 0 1 .19.224.642.642 0 0 1-.011.613 1.326 1.326 0 0 1 .482.235 1.334 1.334 0 0 1 .258 1.842 1.098 1.098 0 0 1 .35.15 1.102 1.102 0 0 1 .337 1.516 1.094 1.094 0 0 1-.344.344.994.994 0 0 1 .228 1.318 1.006 1.006 0 0 1-.605.434.904.904 0 0 1-.803 1.482.814.814 0 0 0-.008-.04.784.784 0 0 1-1.075.873.639.639 0 0 1-.098.28.625.625 0 0 1-.43.288 1.33 1.33 0 0 1 .023.456 1.334 1.334 0 0 1-1.44 1.173 1.098 1.098 0 0 1 .054.377 1.102 1.102 0 0 1-1.128 1.072 1.098 1.098 0 0 1-.47-.12.994.994 0 0 1-1.696.583.904.904 0 0 1-1.685.075.784.784 0 0 1-1.274-.493.639.639 0 0 1-.29.064.64.64 0 0 1-.621-.58l.004-.007a1.326 1.326 0 0 1-.632.523 1.334 1.334 0 0 1-1.718-.706 1.098 1.098 0 0 1-.306.232 1.102 1.102 0 0 1-1.48-.478 1.094 1.094 0 0 1-.123-.471.994.994 0 0 1-1.318-1.21.904.904 0 0 1-.874-1.442.784.784 0 0 1-.176-1.356.639.639 0 0 1-.194-.224.642.642 0 0 1 .011-.61l.019.004a1.326 1.326 0 0 1-.497-.239 1.334 1.334 0 0 1-.262-1.845 1.098 1.098 0 0 1-.35-.146 1.102 1.102 0 0 1-.337-1.52 1.094 1.094 0 0 1 .347-.34A.994.994 0 0 1 2.88 9a.904.904 0 0 1 .803-1.48.784.784 0 0 1 1.083-.836.639.639 0 0 1 .098-.28.649.649 0 0 1 .433-.288 1.33 1.33 0 0 1-.026-.452A1.334 1.334 0 0 1 6.716 4.49a1.098 1.098 0 0 1-.06-.377 1.101 1.101 0 0 1 1.13-1.073 1.094 1.094 0 0 1 .47.115.994.994 0 0 1 1.696-.579.904.904 0 0 1 .857-.617zM3.683 7.519a.784.784 0 0 0 .008.041l-.004-.04a.904.904 0 0 0-.004-.001zM17.502 19.61a1.098 1.098 0 0 0-.002-.004h-.037a1.334 1.334 0 0 0 .039.004zM13.825 3.507a1.322 1.322 0 0 0-.008.012l.008-.011zm-2.369-.014l-.003.003a.9.9 0 0 1-.665.27.896.896 0 0 1-.583-.232.994.994 0 0 1-.986.732.99.99 0 0 1-.362-.075 1.098 1.098 0 0 1-1.061 1.046 1.326 1.326 0 0 1 .123.736 1.334 1.334 0 0 1-.725 1.035 1.1 1.1 0 0 1 .307.795 1.106 1.106 0 0 1-.232.65c.321.18.53.523.523.915a1.016 1.016 0 0 1-.07.337.915.915 0 0 1 .82.937.923.923 0 0 1-.01.138.74.74 0 0 1 .157-.01c.343.007.627.25.702.57a.661.661 0 0 1 .38-.111c.31.007.561.224.632.511a.418.418 0 0 1 .381-.015 1.352 1.352 0 0 1 .303-.63.418.418 0 0 1-.12-.143.422.422 0 0 1 .004-.392.665.665 0 0 1-.325-1.117.736.736 0 0 1-.359-.336.74.74 0 0 1 .385-1.023.747.747 0 0 0-.06.026.915.915 0 0 1-.201-.262.915.915 0 0 1 .623-1.315V6.53a1.02 1.02 0 0 1 .437-1.371 1.012 1.012 0 0 1 .553-.112 1.11 1.11 0 0 1 .598-1.054 1.12 1.12 0 0 1 .06-.026.642.642 0 0 1-.109-.21.784.784 0 0 1-.455.132.784.784 0 0 1-.662-.396zm4.573 1.512a1.326 1.326 0 0 1-.587.46 1.334 1.334 0 0 1-1.255-.142v-.011a1.11 1.11 0 0 1-.553.66 1.106 1.106 0 0 1-.683.113 1.02 1.02 0 0 1-.553.889 1.016 1.016 0 0 1-.329.105.918.918 0 0 1-.43 1.169.923.923 0 0 1-.127.056.74.74 0 0 1 .086.13.738.738 0 0 1-.168.89.661.661 0 0 1 .28.283.655.655 0 0 1-.149.796.418.418 0 0 1 .153.164c.019.034.03.068.038.101a1.356 1.356 0 0 1 .672-.015.422.422 0 0 1 .056-.142.422.422 0 0 1 .34-.194.665.665 0 0 1 .796-.848.736.736 0 0 1 .112-.478.733.733 0 0 1 1.016-.224.915.915 0 0 1 .127-.306.915.915 0 0 1 1.27-.28.915.915 0 0 1 .179.153 1.02 1.02 0 0 1 1.408-.314 1.012 1.012 0 0 1 .374.422c.355-.24.833-.261 1.214-.015a1.11 1.11 0 0 1 .209.172.642.642 0 0 1 .082-.108.784.784 0 0 1-.332-.337.784.784 0 0 1 .03-.77.9.9 0 0 1-.553-.455.896.896 0 0 1-.075-.624.994.994 0 0 1-1.117-.511.994.994 0 0 1-.104-.359 1.098 1.098 0 0 1-1.427-.43zM5.249 7.37a.784.784 0 0 1-.124.46.784.784 0 0 1-.68.362c.06.235.026.49-.112.71a.896.896 0 0 1-.5.377c.31.325.373.829.12 1.225a.99.99 0 0 1-.255.269 1.098 1.098 0 0 1 .351 1.45 1.326 1.326 0 0 1 .691.276 1.334 1.334 0 0 1 .512 1.154c.28-.064.579-.019.84.15a1.106 1.106 0 0 1 .438.53 1.02 1.02 0 0 1 1.05.03 1.016 1.016 0 0 1 .257.231.914.914 0 0 1 1.225-.224.919.919 0 0 1 .112.086.74.74 0 0 1 .071-.142.74.74 0 0 1 .852-.306.661.661 0 0 1 .1-.381.664.664 0 0 1 .763-.273.418.418 0 0 1 .246-.373 1.36 1.36 0 0 1-.358-.523v-.008a.418.418 0 0 1-.25.075.422.422 0 0 1-.344-.19.665.665 0 0 1-1.132-.243.736.736 0 0 1-.47.149.733.733 0 0 1-.718-.755.915.915 0 0 1-.329.049.915.915 0 0 1-.855-1.177h-.004a1.016 1.016 0 0 1-.993-1.042 1.012 1.012 0 0 1 .168-.534 1.11 1.11 0 0 1-.64-1.035 1.11 1.11 0 0 1 .068-.358.65.65 0 0 1-.1-.019zm11.127 2.133a.913.913 0 0 1-1.225.224.926.926 0 0 1-.112-.082.74.74 0 0 1-.067.142.74.74 0 0 1-.852.302.661.661 0 0 1-.105.385.662.662 0 0 1-.762.277.418.418 0 0 1-.063.212.426.426 0 0 1-.075.086 1.356 1.356 0 0 1 .314.564.418.418 0 0 1 .187-.04.422.422 0 0 1 .343.194.665.665 0 0 1 1.136.242.736.736 0 0 1 .467-.153c.41.008.728.348.72.755a.74.74 0 0 1 0 .008v-.005a.915.915 0 0 1 .326-.052.915.915 0 0 1 .896.941.919.919 0 0 1-.037.236c.564.015 1.008.482.993 1.046a1.012 1.012 0 0 1-.168.534 1.11 1.11 0 0 1 .647 1.035 1.11 1.11 0 0 1-.075.362l.004-.007.1.018a.784.784 0 0 1 .124-.46.784.784 0 0 1 .68-.362.9.9 0 0 1 .112-.71.896.896 0 0 1 .504-.373.994.994 0 0 1-.123-1.225.99.99 0 0 1 .257-.269 1.098 1.098 0 0 1-.35-1.453 1.326 1.326 0 0 1-.696-.273h-.003a1.334 1.334 0 0 1-.512-1.158 1.082 1.082 0 0 1-.837-.145 1.106 1.106 0 0 1-.44-.535 1.02 1.02 0 0 1-1.05-.026 1.016 1.016 0 0 1-.258-.235zm-.094 3.116l-.007.066a.74.74 0 0 0 .007-.066zm-2.864-.259a1.36 1.36 0 0 1-.363.598.418.418 0 0 1 .194.187.422.422 0 0 1-.007.396.665.665 0 0 1 .329 1.113.736.736 0 0 1 .358.336.739.739 0 0 1-.32.994.915.915 0 0 1 .197.261.91.91 0 0 1-.396 1.233.919.919 0 0 1-.224.082v.004a1.02 1.02 0 0 1-.44 1.374 1.012 1.012 0 0 1-.55.109 1.11 1.11 0 0 1-.661 1.083.642.642 0 0 1 .112.21.026.026 0 0 1-.004 0v.003a.784.784 0 0 1 .456-.134.784.784 0 0 1 .661.392.9.9 0 0 1 .665-.27.896.896 0 0 1 .587.236.994.994 0 0 1 .982-.736.99.99 0 0 1 .362.079v.022a1.1 1.1 0 0 1 1.061-1.072 1.326 1.326 0 0 1-.123-.736c.056-.46.34-.837.725-1.035l.003.004a1.102 1.102 0 0 1-.31-.795 1.106 1.106 0 0 1 .232-.654 1.02 1.02 0 0 1-.452-1.251.915.915 0 0 1-.822-.934.923.923 0 0 1 .011-.142.74.74 0 0 1-.157.015.74.74 0 0 1-.698-.572.661.661 0 0 1-.385.112.667.667 0 0 1-.627-.512.418.418 0 0 1-.217.053.418.418 0 0 1-.18-.045zm-.964.93a1.36 1.36 0 0 1-.336.042c-.112 0-.22-.012-.322-.038a.418.418 0 0 1-.06.295.422.422 0 0 1-.343.195.665.665 0 0 1-.792.844.736.736 0 0 1-.112.478.74.74 0 0 1-1.02.224.915.915 0 0 1-.127.306.915.915 0 0 1-1.266.28.919.919 0 0 1-.183-.153v.004a1.02 1.02 0 0 1-1.408.31 1.012 1.012 0 0 1-.374-.418c-.355.239-.83.261-1.214.015a1.113 1.113 0 0 1-.21-.172.65.65 0 0 1-.081.105.784.784 0 0 1 .336.336.784.784 0 0 1-.034.77.89.89 0 0 1 .553.455.896.896 0 0 1 .075.624.994.994 0 0 1 1.12.515.99.99 0 0 1 .101.355 1.098 1.098 0 0 1 1.431.43 1.326 1.326 0 0 1 .587-.46c.43-.172.896-.104 1.255.142a1.106 1.106 0 0 1 .549-.65 1.106 1.106 0 0 1 .683-.108 1.02 1.02 0 0 1 .553-.893 1.02 1.02 0 0 1 .333-.104.916.916 0 0 1 .425-1.17.919.919 0 0 1 .131-.052.736.736 0 0 1-.09-.134.738.738 0 0 1 .169-.886.661.661 0 0 1-.28-.284.67.67 0 0 1 .149-.799.418.418 0 0 1-.15-.164.418.418 0 0 1-.048-.24z"
                  fill="red">
                  </path>
                  </svg>
                  </a>
            </div>

          {showAlert && (
        <div
          className="mb-3 inline-flex w-full items-center rounded-lg bg-green-100 px-6 py-5 text-base text-green-700"
          role="alert">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          I make it a priority to respond to all inquiries promptly, so you can
          expect to hear back from me soon. Thank you!
        </div>
      )}

    {showError && <div
        className="mb-3 inline-flex w-full items-center rounded-lg bg-red-100 px-6 py-5 text-base text-red-700"
        role="alert">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd" />
          </svg>
        </span>
        Ops! Something went wrong. Please try again!
                  </div>}
                  
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-6" data-te-input-wrapper-init>
                          <input
                type="text"
                name="user_name"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 shadow-lg"
                id="user_name"
                placeholder="Name"
                required
              />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="user_name"
              >
                Name
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                          <input
                type="email"
                name="user_email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 shadow-lg"
                id="user_email"
                placeholder="Email address"
                required
              />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="user_email"
              >
                Email address
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                          <textarea
                name="message"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 shadow-lg"
                id="message"
                rows="3"
                placeholder="Your message"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              value="Send"
              data-te-ripple-init
              data-te-ripple-color="purple"
              className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal border-2 text-gray shadow-lg transition duration-150 ease-in-out hover:bg-purple-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Send
            </button>
          </form>
              </div>
          </section>
    </div>
  );
}

export default Contact;
