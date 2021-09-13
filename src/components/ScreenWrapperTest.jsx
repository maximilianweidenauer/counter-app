import React from "react";
import { ScreenWrapper, useScreen } from "reactUI/dist/moduleIndex"
import CustomCounter from "./CustomCounter";

const ScreenWrapperTest = (props) => {
    const screen = useScreen(props.screenName);

    const onOpen = () => {
        screen.addCustomComponent("CouWel-LV_P1_L1", <CustomCounter/>);
        screen.sendScreenParameter({test: "testparam"});
    }

    return (
        <ScreenWrapper onOpen={onOpen}>
            {workScreen =>
                <>
                    {workScreen}
                </>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperTest