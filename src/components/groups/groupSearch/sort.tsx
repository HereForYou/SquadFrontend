"use client"
import React from "react";
import { Dropdown } from "flowbite-react";

const Sort = () => {
  return (
    <div className="cursor-pointer">
      <Dropdown
        label="SORT"
        renderTrigger={() => (
          <div className="text-md flex justify-start gap-2 items-center w-full max-w-[100px] ">
            <div>SORT</div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.31073 0H6.41808V9.31073H15.8192V6.41808H9.31073V0ZM0 8.04511C0 4.50322 2.31482 1.50198 5.51412 0.471729V3.60913C3.95133 4.47081 2.89266 6.13432 2.89266 8.04511C2.89266 10.8409 5.15906 13.1073 7.9548 13.1073C9.97413 13.1073 11.7173 11.9249 12.5298 10.2147H15.6101C14.6658 13.5535 11.596 15.9999 7.9548 15.9999C3.56149 15.9999 0 12.4384 0 8.04511ZM10.2147 3.51416C11.1038 3.9585 11.8439 4.65685 12.3398 5.51412H15.4985C14.6778 3.06704 12.6998 1.15088 10.2147 0.415894V3.51416ZM9.31073 6.41808V0H6.41808V9.31073H15.8192V6.41808H9.31073ZM15.6192 6.61808H9.11073V0.2H6.61808V9.11073H15.6192V6.61808ZM5.31412 0.751455C2.33112 1.83166 0.2 4.68975 0.2 8.04511C0.2 12.328 3.67194 15.7999 7.9548 15.7999C11.411 15.7999 14.3396 13.5387 15.341 10.4147H12.6545C11.7878 12.1302 10.0089 13.3073 7.9548 13.3073C5.0486 13.3073 2.69266 10.9513 2.69266 8.04511C2.69266 6.10103 3.74697 4.40347 5.31412 3.49255V0.751455ZM5.31412 0.539098C2.21879 1.62803 0 4.57746 0 8.04511C0 12.4384 3.56149 15.9999 7.9548 15.9999C11.5229 15.9999 14.5423 13.6507 15.5507 10.4147C15.5714 10.3484 15.5912 10.2817 15.6101 10.2147H12.5298C11.7173 11.9249 9.97413 13.1073 7.9548 13.1073C5.15906 13.1073 2.89266 10.8409 2.89266 8.04511C2.89266 6.13432 3.95133 4.47081 5.51412 3.60913V0.471729C5.44706 0.493324 5.38039 0.515785 5.31412 0.539098ZM12.4537 5.31412H15.2151C14.3964 3.13862 12.6275 1.42812 10.4147 0.68852V3.39217C11.2554 3.83754 11.9609 4.50399 12.4537 5.31412ZM10.2147 3.51416C11.1038 3.9585 11.8439 4.65685 12.3398 5.51412H15.4985C15.476 5.44705 15.4526 5.38038 15.4284 5.31412C14.5929 3.02811 12.7383 1.23278 10.4147 0.477942C10.3484 0.456408 10.2817 0.435721 10.2147 0.415894V3.51416Z"
                  fill="#322A44"
                />
              </svg>
            </div>
          </div>
        )}
      >
        <Dropdown.Item>
          <div className="text-md flex justify-start gap-2 items-center">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.31073 0H6.41808V9.31073H15.8192V6.41808H9.31073V0ZM0 8.04511C0 4.50322 2.31482 1.50198 5.51412 0.471729V3.60913C3.95133 4.47081 2.89266 6.13432 2.89266 8.04511C2.89266 10.8409 5.15906 13.1073 7.9548 13.1073C9.97413 13.1073 11.7173 11.9249 12.5298 10.2147H15.6101C14.6658 13.5535 11.596 15.9999 7.9548 15.9999C3.56149 15.9999 0 12.4384 0 8.04511ZM10.2147 3.51416C11.1038 3.9585 11.8439 4.65685 12.3398 5.51412H15.4985C14.6778 3.06704 12.6998 1.15088 10.2147 0.415894V3.51416ZM9.31073 6.41808V0H6.41808V9.31073H15.8192V6.41808H9.31073ZM15.6192 6.61808H9.11073V0.2H6.61808V9.11073H15.6192V6.61808ZM5.31412 0.751455C2.33112 1.83166 0.2 4.68975 0.2 8.04511C0.2 12.328 3.67194 15.7999 7.9548 15.7999C11.411 15.7999 14.3396 13.5387 15.341 10.4147H12.6545C11.7878 12.1302 10.0089 13.3073 7.9548 13.3073C5.0486 13.3073 2.69266 10.9513 2.69266 8.04511C2.69266 6.10103 3.74697 4.40347 5.31412 3.49255V0.751455ZM5.31412 0.539098C2.21879 1.62803 0 4.57746 0 8.04511C0 12.4384 3.56149 15.9999 7.9548 15.9999C11.5229 15.9999 14.5423 13.6507 15.5507 10.4147C15.5714 10.3484 15.5912 10.2817 15.6101 10.2147H12.5298C11.7173 11.9249 9.97413 13.1073 7.9548 13.1073C5.15906 13.1073 2.89266 10.8409 2.89266 8.04511C2.89266 6.13432 3.95133 4.47081 5.51412 3.60913V0.471729C5.44706 0.493324 5.38039 0.515785 5.31412 0.539098ZM12.4537 5.31412H15.2151C14.3964 3.13862 12.6275 1.42812 10.4147 0.68852V3.39217C11.2554 3.83754 11.9609 4.50399 12.4537 5.31412ZM10.2147 3.51416C11.1038 3.9585 11.8439 4.65685 12.3398 5.51412H15.4985C15.476 5.44705 15.4526 5.38038 15.4284 5.31412C14.5929 3.02811 12.7383 1.23278 10.4147 0.477942C10.3484 0.456408 10.2817 0.435721 10.2147 0.415894V3.51416Z"
                  fill="#322A44"
                />
              </svg>
            </div>
            <div>RECENT</div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="text-md flex justify-start gap-1 items-center">
            <div>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8262 12.0852C11.7252 15.9539 7.71893 17.7627 5.80613 16.0345C3.89333 14.3063 5.49902 10.3402 8.8229 6.66125C12.3743 3.19469 16.9194 1.87752 17.8429 2.71197C18.7665 3.54642 18.1233 7.9717 14.8262 12.0852Z"
                  fill="#322A44"
                />
                <path
                  d="M8.50971 7.43016C8.9051 7.22932 9.30704 7.68911 9.05516 8.05411L5.69239 12.927C5.56755 13.1079 5.32587 13.1647 5.13356 13.0583L2.85677 11.7983C2.25678 11.4663 2.27216 10.5985 2.88354 10.288L8.50971 7.43016Z"
                  fill="#322A44"
                />
                <path
                  d="M14.1505 12.5275C14.3103 12.1138 13.8123 11.7604 13.4746 12.0479L8.96677 15.8863C8.79941 16.0288 8.76739 16.275 8.89272 16.4555L10.3765 18.5932C10.7675 19.1565 11.6293 19.0535 11.8764 18.4138L14.1505 12.5275Z"
                  fill="#322A44"
                />
                <path
                  d="M13.6631 9.59315C13.1092 10.2063 12.163 10.2543 11.5499 9.70029C10.9367 9.14631 10.8888 8.20017 11.4427 7.58701C11.9967 6.97386 12.9429 6.9259 13.556 7.47987C14.1692 8.03385 14.2171 8.98 13.6631 9.59315Z"
                  fill="#F5F5F5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.47244 14.9711C4.69261 15.2485 4.64622 15.6519 4.36883 15.872L1.29986 18.308C1.02247 18.5281 0.619113 18.4818 0.398941 18.2044C0.178769 17.927 0.225154 17.5236 0.502543 17.3035L3.57152 14.8675C3.84891 14.6474 4.25227 14.6937 4.47244 14.9711Z"
                  fill="#322A44"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.02242 17.2745C6.72419 17.0835 6.32759 17.1705 6.13661 17.4687L4.02355 20.7683C3.83256 21.0666 3.9195 21.4631 4.21774 21.6541C4.51597 21.8451 4.91257 21.7582 5.10356 21.4599L7.21661 18.1603C7.4076 17.8621 7.32066 17.4655 7.02242 17.2745Z"
                  fill="#322A44"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.53341 16.3602C5.7973 16.5964 5.81977 17.0018 5.58359 17.2657L2.97055 20.1853C2.73437 20.4492 2.32898 20.4717 2.06509 20.2355C1.80119 19.9993 1.77873 19.5939 2.01491 19.33L4.62794 16.4104C4.86412 16.1465 5.26951 16.124 5.53341 16.3602Z"
                  fill="#322A44"
                />
              </svg>
            </div>
            <div>TRENDING</div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="text-md flex justify-start gap-2 items-center">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.69971 6.80185C4.32693 6.93694 3.92472 7.0106 3.5053 7.0106C1.56937 7.0106 0 5.44122 0 3.5053C0 1.56938 1.56937 0 3.5053 0C5.44123 0 7.0106 1.56938 7.0106 3.5053C7.0106 3.92083 6.9383 4.31946 6.80559 4.68932C7.17837 4.55423 7.58058 4.48057 8 4.48057C8.41942 4.48057 8.82163 4.55423 9.19441 4.68932C9.0617 4.31946 8.9894 3.92083 8.9894 3.5053C8.9894 1.56938 10.5588 0 12.4947 0C14.4306 0 16 1.56938 16 3.5053C16 5.44122 14.4306 7.0106 12.4947 7.0106C12.0753 7.0106 11.6731 6.93694 11.3003 6.80185C11.433 7.1717 11.5053 7.57034 11.5053 7.98587C11.5053 8.41363 11.4287 8.82349 11.2884 9.20248C11.6645 9.06464 12.0708 8.9894 12.4947 8.9894C14.4306 8.9894 16 10.5588 16 12.4947C16 14.4306 14.4306 16 12.4947 16C10.5588 16 8.9894 14.4306 8.9894 12.4947C8.9894 12.0669 9.06602 11.6571 9.20629 11.2781C8.83018 11.4159 8.42388 11.4912 8 11.4912C7.57612 11.4912 7.16982 11.4159 6.79371 11.2781C6.93398 11.6571 7.0106 12.0669 7.0106 12.4947C7.0106 14.4306 5.44123 16 3.5053 16C1.56937 16 0 14.4306 0 12.4947C0 10.5588 1.56937 8.9894 3.5053 8.9894C3.92918 8.9894 4.33548 9.06464 4.71159 9.20248C4.57132 8.82349 4.4947 8.41363 4.4947 7.98587C4.4947 7.57034 4.567 7.1717 4.69971 6.80185Z"
                  fill="#322A44"
                />
              </svg>
            </div>
            <div>MEMBER COUNT</div>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default Sort;
