import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';
import { useState } from 'react';

const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required('введите пароль').min(5, 'пароль должен быть длиннее 4 символов'),
    repeatPassword: yup
      .string()
      .required('повторите пароль')
      .min(5, 'пароль должен быть длиннее 4 символов')
      .oneOf([yup.ref('password'), ''], 'пароли должны совпадать'),
    select: yup.object(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const App = () => {
  const [formResult, setFormResult] = useState('');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) =>
    fetch('http://194.87.210.5:5000/api/v1/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((dataFromBack) => setFormResult(dataFromBack));

  return (
    <div className="App">
      <Header />

      {formResult && <div>данные получены! спасибули ^__^</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Логин:
          <input type="text" {...register('login')} />
        </label>
        {errors.login && <span>{errors.login.message}</span>}
        <label>
          Пароль:
          <input type="password" {...register('password')} />
        </label>
        {errors.password && <span>{errors.password.message}</span>}
        <label>
          Повторите пароль:
          <input type="password" {...register('repeatPassword')} />
        </label>
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          )}
        />
        <button type="submit">Впустити миня!!</button>
      </form>

      <br />
      <hr />
      <br />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
