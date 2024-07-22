import { Formik, Form, FormikProps } from 'formik'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import * as Yup from 'yup'

import ButtonAddTableTFDisabled from 'shared/buttons/ButtonAddTableTFDisabled/ButtonAddTableTFDisabled'
import ButtonAddTableTFSecondary from 'shared/buttons/ButtonAddTableTFSecondary/ButtonAddTableTFSecondary'
import ButtonAddTableTFActive from 'shared/buttons/ButtonAddTableTFActive/ButtonAddTableTFActive'

import { Dialog } from '@mui/material'
import TextField from '@mui/material/TextField'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './RestaurantEditorPage.scss'

import {
  // createRestaurantValuesType,
  // editRestaurantValuesType, 
  // restaurantType,
} from 'shared/types/restaurantsEntity'

import { useAppDispatch, useAppSelector } from 'redux/hooks'

import {
  createRestaurantTable,

} from 'pages/AdminPanelPage/userRestaurantsReduser'

type Props = {
    openModal: boolean;
    handleClose: () => void;
}


interface FormValues {
  title: string
  seatsCount: number 
  // whereTable: string
}

const initialValues: FormValues = {
  title: '',
  seatsCount: 0,
  // whereTable: '',
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Обов'язкове поле"),
  seatsCount: Yup.number().required("Обов'язкове поле"),
  // whereTable: Yup.string().required("Обов'язкове поле"),
})

const ModalAddTable = ({openModal, handleClose }: Props) => {
  const dispatch = useAppDispatch()

  const userRestaurantsCurrent = useAppSelector((state) => state.userRestaurants.userRestaurantsCurrent);

  // console.log("userRestaurantsCurrent", userRestaurantsCurrent)

  const handleTableTitleChange = (
    value: string,
    props: FormikProps<FormValues>
  ) => {
    props.setFieldValue("title", value); // Встановлюємо значення title
  };

  const handleCountTableChange = (
    value: string,
    props: FormikProps<FormValues>
  ) => {
    const parsedValue = parseInt(value); // Спробувати перетворити введене значення в число
    console.log(parsedValue);
    if (!isNaN(parsedValue)) {
      // Якщо введено число
      props.setFieldValue("seatsCount", parsedValue); // Встановити введене число як значення countTable
    } else {
      props.setFieldValue("seatsCount", value); // Якщо введено не число, встановити значення з радіокнопок
    }
  };

  const handleSubmit = (values: FormValues) => {
    const selectedRestaurant = userRestaurantsCurrent[0];
    if (!selectedRestaurant) {
      console.log("Виберіть ресторан");
      toast.error("Виберіть ресторан", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (selectedRestaurant) {
      const formDataWithStaticData = {
        restaurantId: selectedRestaurant.id,
        floorId: 54,
        ...values,
      };
      dispatch(createRestaurantTable(formDataWithStaticData));
      console.log("Form submitted with values:", formDataWithStaticData);
      handleClose();
    }
  };

  // const handleWhereTableChange = (
  //   value: string,
  //   props: FormikProps<FormValues>
  // ) => {
  //   props.setFieldValue('whereTable', value)
  // }

  return (
    <Dialog
    open={openModal}
    onClose={handleClose}
    className="restaurantEditor-modal"
  >
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form className="restaurantEditor-form flex flex-col items-center justify-center gap-[32px] p-[16px] w-[406px]">
          <FormControl component="fieldset" className="label">
            <TextField
              id="standard-basic"
              label="Стіл 1"
              variant="standard"
              placeholder="Введіть назву столика"
              name="title"
              value={props.values.title || ""}
              onChange={(e) =>
                handleTableTitleChange(e.target.value, props)
              }
            />
          </FormControl>
          <FormControl
            component="fieldset"
            className="input flex justify-center"
          >
            <RadioGroup
              name="seatsCount"
              value={props.values.seatsCount}
              onChange={(e) =>
                handleCountTableChange(e.target.value, props)
              }
              className="flex flex-wrap items-center justify-center flex-row gap-[25px] w-[374px] pb-[18px]"
            >
              <FormControlLabel
                value="2"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="2 місця"
                className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="4"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="4 місця"
                className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="6"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="6 місць"
                className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="8"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="8 місць"
                className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="10"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="10 місць"
                className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="12"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="12 місць"
                className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
            </RadioGroup>

            <TextField
              // className='restaurantEditor-form'
              id="Інша кількість"
              label="Інша кількість"
              variant="standard"
              placeholder="Введіть кількість місць"
              name="seatsCount"
              value={
                props.values.seatsCount !== null &&
                !isNaN(props.values.seatsCount)
                  ? props.values.seatsCount
                  : ""
              }
              onChange={(e) =>
                handleCountTableChange(e.target.value, props)
              }
            />
          </FormControl>

          {/* <FormControl component="fieldset" className="">
            <RadioGroup
              name="whereTable"
              onChange={(e) =>
                handleWhereTableChange(e.target.value, props)
              }
              className="flex flex-wrap justify-center flex-row gap-[25px] w-[395px]"
            >
              <FormControlLabel
                value="Біля вікна"
                control={
                  <Radio
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="Біля вікна"
                className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="На терасі"
                control={
                  <Radio
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="На терасі"
                className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
              <FormControlLabel
                value="В залі"
                control={
                  <Radio
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="В залі"
                className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
              />
            </RadioGroup>
          </FormControl> */}

          <ul className="flex items-center gap-[12px]">
            <li>
              <ButtonAddTableTFSecondary
                onClick={handleClose}
                label={"Скасувати"}
              />
            </li>
            <li>
              {props.dirty && props.isValid ? (
                <ButtonAddTableTFActive label={"Підтвердити"} />
              ) : (
                <ButtonAddTableTFDisabled label={"Підтвердити"} />
              )}
            </li>
          </ul>
        </Form>
      )}
    </Formik>
  </Dialog>
  )
}
export default ModalAddTable
