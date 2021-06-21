# useForm Hook

Ejemplo:

```
    const initialForm = {
        name: '',
        age: 0,
        email: '',
    }

    const [ values, handelInputChange, reset ] = useForm( initialForm );
```