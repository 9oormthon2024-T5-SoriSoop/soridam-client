import React from "react";
import { Background, BtnWrapper, CancelBtn, DeleteBtn, DescriptionWrapper, InfoContainer } from "./DeleteModal.styles";
import { useDispatch } from "react-redux";
import { toggleDeleteModal } from "../../store/menu/menuSlice";

const DeleteModal = () => {
  const dispatch = useDispatch();

  return (
    <Background>
      <InfoContainer>
        <DescriptionWrapper>
          <p>이 게시글을 삭제하시겠습니까?</p>
          <p>삭제 후 복구가 불가능합니다.</p>
        </DescriptionWrapper>
          <BtnWrapper>
            <CancelBtn onClick={() => dispatch(toggleDeleteModal(false))}>
              취소하기
            </CancelBtn>
            <DeleteBtn>
              삭제하기
            </DeleteBtn>
          </BtnWrapper>
      </InfoContainer>
    </Background>
  );
};

export default DeleteModal;

