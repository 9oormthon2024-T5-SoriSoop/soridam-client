import React from "react";

interface ModalProps {
  isOpen: boolean; // 모달 창 열림 여부
  onClose: () => void; // 닫기 함수
  onDelete: () => void; // 삭제 함수
}

const DeleteModal: React.FC<ModalProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null; // 모달이 닫힌 경우 렌더링하지 않음

  return (
    <>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5); /* 어두운 반투명 배경 */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-container {
            background: white;
            width: 90%;
            max-width: 400px;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.3s ease;
          }

          .modal-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .modal-description {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
          }

          .modal-buttons {
            display: flex;
            justify-content: space-between;
          }

          .cancel-button,
          .delete-button {
            flex: 1;
            margin: 0 5px;
            padding: 10px 0;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
          }

          .cancel-button {
            background: #f0f0f0;
            border: 1px solid #ccc;
            color: #333;
          }

          .cancel-button:hover {
            background: #e0e0e0;
          }

          .delete-button {
            background: #0066ff;
            border: none;
            color: white;
          }

          .delete-button:hover {
            background: #0046c5;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container"
          onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
        >
          <p className="modal-title">이 게시글을 삭제하시겠습니까?</p>
          <p className="modal-description">삭제 후 복구가 불가능합니다.</p>
          <div className="modal-buttons">
            <button className="cancel-button" onClick={onClose}>
              취소하기
            </button>
            <button className="delete-button" onClick={onDelete}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

