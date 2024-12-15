import React from 'react';
import { ModalBackground } from './DeleteModal.styles';

const DeleteModal = () => {
    return (
        <ModalBackground>
            <div>
                <p>이 게시글을 삭제하시겠습니까?</p>
                <p>삭제 후 복구가 불가합니다.</p>
            </div>
            <div>
                <button>
                    취소하기
                </button>
                <button>
                    삭제하기
                </button>
            </div>
        </ModalBackground>
    );
};

export default DeleteModal;