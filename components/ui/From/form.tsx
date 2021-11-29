import * as React from 'react'
import { FormProvider, useFormContext } from 'react-hook-form'
import { Input, Select,Textarea } from "@components/ui/"

function Form({ children, methods, onSubmit, ...props }) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} {...props}>
        {children}
      </form>
    </FormProvider>
  )
}


function FormInput(props) {
  const { errors, register } = useFormContext()

  return (
    <React.Fragment>
      <Input ref={register} {...props}>
        {errors?.[props.field] ? (
          <p className="mt-2 text-red-700 text-sm">
            {errors[props.field].message}
          </p>
        ) : null}
      </Input>
    </React.Fragment>
  )
}

function FormSelect(props) {
  const { errors, register } = useFormContext()

  return (
    <Select ref={register} {...props}>
      {errors?.[props.field] ? (
        <p className="mt-2 text-red-700 text-sm">
          {errors[props.field].message}
        </p>
      ) : null}
    </Select>
  )
}

function FormTextarea(props) {
  const { errors, register } = useFormContext()

  return (
    <React.Fragment>
      <Textarea ref={register} {...props}>
        {errors?.[props.field] ? (
          <p className="mt-2 text-red-700 text-sm">
            {errors[props.field].message}
          </p>
        ) : null}
      </Textarea>
    </React.Fragment>
  )
}

Form.Input = FormInput
Form.Select = FormSelect
Form.Textarea = FormTextarea

export default Form

export { Input, Select, Textarea }