import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import routes from "../../config/routeConstants";
import { FullVH } from "../HomePage/styledComponents";
import uploadIcon from "../../assets/upload-icon.svg";
import avatar from "../../assets/profile-photo.png";
import {
  AddResourcesForm,
  BackNavigation,
  BannerContainer,
  BannerImg,
  CreateButton,
  FormContainer,
  FormInput,
  FormLabel,
  FormTitle,
  Icon,
  IconContainer,
  IconTitleRow,
  PageWrapper,
} from "./styledComponents";
import { toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddResourcesPage = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();
  const notify = (msg: string, type: TypeOptions | undefined) => {
    return toast(msg, {
      position: "bottom-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      type: type,
      style: {
        background: type === "error" ? "tomato" : "green",
        fontWeight: 700,
        color: "white",
      },
    });
  };

  const validateAndSubmit = async () => {
    if (!name) notify("Please fill the name", "error");
    else if (!link) notify("Please provide a Link", "error");
    else if (!description) notify("Description is required!", "error");
    else {
      notify("Successfully added a Resource..!", "success");
      history.push(routes.home);
    }
  };

  return (
    <FullVH>
      <Header activeRoute={routes.addResources} />
      <PageWrapper>
        <FormContainer>
          <BackNavigation onClick={() => history.goBack()}>
            <i className="fa-solid fa-chevron-left mr-4px"></i>
            Users
          </BackNavigation>
          <div>
            <FormTitle>Add a Resource</FormTitle>
            <AddResourcesForm>
              <FormLabel htmlFor="nameInput">name</FormLabel>
              <FormInput
                id="nameInput"
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <FormLabel htmlFor="linkInput">link</FormLabel>
              <FormInput
                isLink
                id="linkInput"
                type="text"
                value={link}
                onChange={(e: any) => setLink(e.target.value)}
              />
              <FormLabel htmlFor="descriptionInput">description</FormLabel>
              <FormInput
                id="descriptionInput"
                as={"textarea"}
                rows={3}
                type="text"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
              />
              <IconTitleRow>
                <IconContainer>
                  <Icon alt="resource-icon" src={avatar} />
                </IconContainer>
                <img alt="upload-icon" className="mr-4px" src={uploadIcon} />
                Change photo
              </IconTitleRow>
              <CreateButton onClick={validateAndSubmit}>Create</CreateButton>
            </AddResourcesForm>
          </div>
        </FormContainer>
        <BannerContainer>
          <BannerImg
            alt="banner-image"
            src="https://res.cloudinary.com/hassanulinam/image/upload/v1659153654/nxt-resources-banner_te5h05.png"
          />
        </BannerContainer>
      </PageWrapper>
    </FullVH>
  );
};

export default AddResourcesPage;
