import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'

interface CategoryProps {
    isActive: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;
export const Header = styled.SafeAreaView`
    height: ${RFValue(113)}px;
    width: 100%;
    background-color: ${theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 19px;
`;
export const Title = styled.Text`
    color: ${theme.colors.shape};
    font-size: 18px;
    font-family: ${theme.fonts.regular};
  `;

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ isActive }) => isActive ? theme.colors.secundary_light : theme.colors.background};

 `;
export const Icon = styled(Feather)`
    font-size: 20px;
    margin-right: 16px;
 `;
export const Name = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: 14px;
 `;
export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.text};

  `;

export const Footer = styled.View`
padding: 24px;
width: 100%;

`;
