// import { useEffect } from "react";

// const useClickOutside = (
//   modalRef: React.RefObject<HTMLDivElement | null>,
//   callback: () => void
// ) => {
//   useEffect(() => {
//     window.onclick = (event) => {
//       console.log(event.target);
//       console.log(modalRef);
//       if (
//         modalRef.current &&  !modalRef.current.contains(event.target as Node)
//       ) {
//          callback();
//       }
//     };
//   }, [callback, modalRef]);
// };

// export default useClickOutside;

import { useEffect } from "react";

const useClickOutside = (
  modalRef: React.RefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (modalRef.current && !modalRef.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, modalRef]);
};

export default useClickOutside;
