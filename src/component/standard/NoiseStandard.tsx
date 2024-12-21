// 상대 경로로 아이콘 import
import GreenIcon from "../../assets/icons/ico_marker_green.png";
import BlueIcon from "../../assets/icons/ico_marker_blue.png";
import RedIcon from "../../assets/icons/ico_marker_red.png";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/menu/menuSlice";
import { Background, DecibelLv, Description, Icon, InfoContainer, PopUpBtn, RowContainer, RowWrapper } from "./NoiseStandard.styles";

const MeasureInfoPopup = () => {
  const dispatch = useDispatch();

  return (
    <Background>
      <InfoContainer>
        <RowContainer>
          <RowWrapper>
            <Icon src={GreenIcon} alt="Green Marker" />
            <DecibelLv>0~70dB</DecibelLv>
          </RowWrapper>
          <Description>전화벨 수준으로, 일상 생활에 영향이 없습니다.</Description>
        </RowContainer>
        <RowContainer>
          <RowWrapper>
            <Icon src={BlueIcon} alt="Blue Marker" />
            <DecibelLv>70~100dB</DecibelLv>
          </RowWrapper>
          <Description>자동차 경적 수준. 잠시라도 노출 시 주의가 필요합니다.</Description>
        </RowContainer>
        <RowContainer>
          <RowWrapper>
            <Icon src={RedIcon} alt="Red Marker" />
            <DecibelLv>100~120dB</DecibelLv>
          </RowWrapper>
          <Description>항공기 이륙 수준. 짧은 시간 노출도 위험합니다.</Description>
        </RowContainer>
        <PopUpBtn onClick={()=>{dispatch(toggleModal(false))}}>확인했어요</PopUpBtn>
      </InfoContainer>
    </Background>
  );
};

export default MeasureInfoPopup;