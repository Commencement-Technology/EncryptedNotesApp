import {EditorBridge, useBridgeState} from '@10play/tentap-editor';
import React from 'react';
import styled from 'styled-components/native';
import {StyledText} from '../Components/StyledText';
import {navigationRef} from '../utils/navigation';
import {TouchableOpacity} from 'react-native';
import {useEditorTitle} from '../utils/useEditorTitle';
import {chevron} from '../assets';

const HeaderContainer = styled.View`
  background-color: ${props => props.theme['--background-primary']};
  height: 44px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme['--border-secondary']};
  flex-direction: row;
  gap: 12px;
`;
const BackChevron = styled.Image`
  width: 24px;
  height: 24px;
`;
const HeaderTitle = styled(StyledText)`
  font-size: 20px;
`;

interface EditorHeaderProps {
  editor: EditorBridge;
}
export const EditorHeader = ({editor}: EditorHeaderProps) => {
  const title = useEditorTitle(editor);
  const editorState = useBridgeState(editor);

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigationRef.goBack()}>
        <BackChevron source={chevron} />
      </TouchableOpacity>
      <HeaderTitle>{editorState.isReady ? title : 'loading...'}</HeaderTitle>
    </HeaderContainer>
  );
};
