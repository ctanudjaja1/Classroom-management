import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import SubjectsList from "@/pages/subjects/list.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SubjectsList">
                <SubjectsList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;