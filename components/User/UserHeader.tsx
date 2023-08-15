import React from "react";

const UserHeader = ({user}) => {
    console.log('Tshasuhdopa',user?.image)

  return (
    <section>
      <div className="mt-0.5 h-36 xs:h-48 sm:h-52">
        <div className="h-full bg-[rgb(51_54_57)] dark:bg-dark-line-reply" />
      </div>
      <div className="relative flex flex-col gap-3 px-4 py-3">
        <div className="flex justify-between">
          <div className="mb-8 xs:mb-14 sm:mb-16">
            <button
              className="custom-button main-tab accent-tab absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0 disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36 [&:hover>figure>span]:brightness-75"
              type="button"
            >
              <figure className="hover-animation relative h-full w-full bg-main-background inner:!m-1 inner:rounded-full inner:transition inner:duration-200">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <img
                    alt={user?.name}
                    sizes="100vw"
                    src={user?.image}
                    className="rounded-full object-cover"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </figure>
            </button>
          </div>
          <div className="flex gap-2 self-start">
            <div className="relative" data-headlessui-state>
              <button
                className="custom-button main-tab dark-bg-tab group relative  p-2
         hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary
         dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
                id="headlessui-popover-button-:r31q:"
                aria-expanded="false"
                data-headlessui-state
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <div
                  className="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
   text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
       group-focus-visible:opacity-100 translate-y-3"
                >
                  <span>More</span>
                </div>
              </button>
            </div>
            <button
              className="custom-button main-tab dark-bg-tab group relative cursor-not-allowed  p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div
                className="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
   text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
       group-focus-visible:opacity-100 translate-y-3"
              >
                <span>Message</span>
              </div>
            </button>
            <button
              className="custom-button main-tab self-start  px-4 py-1.5 font-bold text-white hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border dark:text-light-primary dark:hover:bg-light-border/90 dark:focus-visible:bg-light-border/90 dark:active:bg-light-border/75"
              type="button"
            >
              Follow
            </button>
          </div>
        </div>
        <div>
          <a
            className="flex items-center gap-1 truncate font-bold pointer-events-none -mb-1 text-xl"
            tabIndex={-1}
            href="/user/deepakrudrapaul3814#"
          >
            <p className="truncate">{user?.name}</p>
          </a>
          <div className="flex items-center gap-1 text-gray-500">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-gray-500">
            <div className="flex items-center gap-1">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </i>
              <button className="custom-underline group relative">
                Joined August 2023
                <div
                  className="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
   text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
       group-focus-visible:opacity-100 translate-y-1"
                >
                  <span>17:28 · 14 Aug 2023</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-light-secondary dark:text-dark-secondary [&>a>div]:font-bold [&>a>div]:text-light-primary dark:[&>a>div]:text-dark-primary">
          <a
            className="hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
            href="/user/deepakrudrapaul3814/following"
          >
            <div className="overflow-hidden">
              <p
                className="text-sm"
                data-projection-id={590}
                style={{ opacity: 1, transform: "none" }}
              >
                0
              </p>
            </div>
            <p>Following</p>
          </a>
          <a
            className="hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
            href="/user/deepakrudrapaul3814/followers"
          >
            <div className="overflow-hidden">
              <p
                className="text-sm"
                data-projection-id={601}
                style={{ opacity: 1, transform: "none" }}
              >
                0
              </p>
            </div>
            <p>Follower</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserHeader;
