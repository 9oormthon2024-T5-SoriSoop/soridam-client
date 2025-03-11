import React from 'react';
import { AvgNoiseWrapper, DataDateContainer, DataInfoContainer, DataInfoWrapper, DateWrapper, DetailBtn, Header, InfoWrapper, LocationInfoContainer, LocationWrapper, Marker, MaxNoiseWrapper, NoiseContainer, NoiseData, NoiseDataList, PageBG, SettingWrapper, TimeWrapper } from './NoiseList.styles';
import Info from '../../assets/icons/ico_info.png';
import Setting from "../../assets/icons/ico_setting.png";
import Next from "../../assets/icons/ico_navigate_right.png";
import MarkerDefault from '../../assets/icons/ico_marker_default@2x.png';
import { useDispatch } from 'react-redux';
import { toggleInfoModal } from '../../store/menu/menuSlice';
import { Link } from 'react-router-dom';

const NoiseList = () => {
    const dispatch = useDispatch();

    return (
        <PageBG>
            <Link to='/save/detail'>
                <Header>
                    <InfoWrapper onClick={() => dispatch(toggleInfoModal(true))}>
                        <img src={Info} alt='information_icon' />
                    </InfoWrapper>
                    <SettingWrapper>
                        <img src={Setting} alt='setting_icon' />
                    </SettingWrapper>
                </Header>
                <NoiseDataList>
                    <NoiseData>
                        <Marker>
                            <img src={MarkerDefault} alt='marker'/>
                        </Marker>
                        <DataInfoContainer>
                            <DataInfoWrapper>
                                <LocationInfoContainer>
                                    <LocationWrapper>
                                        합정 앤트러사이트
                                    </LocationWrapper>
                                    <DataDateContainer>
                                        <DateWrapper>
                                            2024.12.10
                                        </DateWrapper>
                                        <TimeWrapper>
                                            12:22
                                        </TimeWrapper>
                                    </DataDateContainer>
                                </LocationInfoContainer>
                                <DetailBtn>
                                    <img src={Next} alt='상세보기 버튼' />
                                </DetailBtn>
                            </DataInfoWrapper>
                            <NoiseContainer>
                                <AvgNoiseWrapper>
                                    평균 65
                                </AvgNoiseWrapper>
                                <MaxNoiseWrapper>
                                    최대 65
                                </MaxNoiseWrapper>
                            </NoiseContainer>
                        </DataInfoContainer>
                    </NoiseData>
                </NoiseDataList>
            </Link>
        </PageBG>
    );
};

export default NoiseList;