import { BackBtnWrapper, DeleteBtn, Header } from "./NoiseDetail.styles";
import MarkerGreen from '../../assets/icons/ico_marker_green.png';
import MarkerBlue from '../../assets/icons/ico_marker_blue.png';
import MarkerRed from '../../assets/icons/ico_marker_red.png';
import BackIcon from '../../assets/icons/ico_navigate_back.png';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleDeleteModal } from "../../store/menu/menuSlice";


const NoiseDetail = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Header>
                <Link to='/save'>
                    <BackBtnWrapper>
                        <img src={BackIcon} alt='backIcon'/>
                    </BackBtnWrapper>
                </Link>
                <DeleteBtn onClick={() => dispatch(toggleDeleteModal(true))}>
                    삭제
                </DeleteBtn>
            </Header>
        </div>
    );
};

export default NoiseDetail;