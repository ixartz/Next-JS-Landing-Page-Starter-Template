type ModalProps = {
  isOpen: boolean;
  message: string;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <p className="mb-4 text-center text-lg text-black">{props.message}</p>
        <button
          onClick={props.onClose}
          className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export { Modal };
