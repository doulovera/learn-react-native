import { Formik, useField } from 'formik'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StyledTextInput } from '../components/StyledTextInput'
import { loginSchema } from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: ''
}

const handleFormSubmit = (values) => {
  console.log(values)
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <Text style={style.error}>{meta.error}</Text>}
    </>
  )
}

export const LogIn = () => {
  return (
    <Formik validationSchema={loginSchema} initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => {
        return (
          <View style={style.container}>
            <FormikInputValue
              placeholder='E-mail'
              name='email'
            />
            <FormikInputValue
              placeholder='Password'
              name='password'
              secureTextEntry
            />
            <Button
              onPress={handleSubmit}
              title='Log in'
            />
          </View>
        )
      }}
    </Formik>
  )
}

const style = StyleSheet.create({
  container: {
    margin: 15
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 15,
    marginTop: -7
  }
})
