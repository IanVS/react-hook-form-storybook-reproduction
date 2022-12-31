import "./styles.css";
import { useForm } from "react-hook-form";

export default function App() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); 
            handleSubmit();
        }}>
            <div>
                <input {...register("firstName", { required: true })} />
                <p>{errors.firstName?.type === 'required' && "First name is required"}</p>
            </div>
            <input type="submit" />
        </form>
    );
}
