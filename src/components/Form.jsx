import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup
  .object({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup.string().required("E-mail é um campo obrigatório").email("Deve ser um email válido"),
    phone: yup.string().required("Telefone é um campo obrigatório").matches(/^\d+$/, "Deve conter apenas números").min(8, "Deve ser um telefone válido").max(9, "Por favor insira o telefone sem o DDD"),
    ddd: yup.string().required("DDD é um campo obrigatório").matches(/^\d+$/, "Deve conter apenas números").max(2, "Apenas dois dígitos"),
  })
  .required();

export const Form = ({setUserData}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Object.keys(errors).length>0? console.log(errors): setUserData(data);
  };

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
        <label>
          Nome:
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          name="name"
          id="name"
        />
        {errors.name && <span className="alert">{errors.name.message}</span>}
        </div>
        <div>
        <label>
          E-mail:
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
        />
        {errors.email && <span className="alert">{errors.email.message}</span>}
        </div>
        <div>
        <label>
          DDD (sem o zero):
        </label>
        <input
          {...register("ddd")}
          type="text"
          placeholder="DDD"
          name="ddd"
          id="ddd"
        />
        {errors.ddd && <span className="alert">{errors.ddd.message}</span>}
        </div>
        <div>
        <label>
          Telefone (sem o DDD):
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Telefone"
          name="phone"
          id="phone"
        />
        {errors.phone && <span className="alert">{errors.phone.message}</span>}
        </div>
        <div>
        <input id="submitButton" type="submit" value="Gerar assinatura" />
        </div>
      </form>)}