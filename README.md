# IENSCH

---

### Taller 1 de Programación orientada a objetos en JavaScript
##### Tema: Funciones Matemáticas (Trigonometría y Operaciones Básicas)

---

## 🎯 Objetivo

- Comprender cómo definir una clase en **JavaScript**.
- Implementar **métodos** dentro de una **clase**.
- Retornar **resultados** dentro de un **objeto** con formato estándar.
- Practicar **lógica** matemática básica aplicada a **trigonometría** y operaciones **matemáticas**.

---

## 📚 Instrucciones

1. Crea una clase llamada **`MathServices`**.
2. Esta clase debe contener **5 métodos** diferentes relacionados con **matemáticas**
3. Cada **método** debe devolver un **objeto** con la siguiente estructura:
```javaScript
return {
    status: "correct",
    message: "The cosine of 30° is 0.5",
    result: 0.5
};
```
4. Finalmente, **instancia** la clase y **probar** los **5 métodos** mostrando 
el resultado en **consola**.

---

## ✏️ Métodos sugeridos

> ⚠️ **advertencia**: Para poder calcular las **razones trigonométricas**, es necesario convertir el valor
del angulo de **grados** a **radianes**, para ello se debe crear un método que haga,
dicha conversión.

0. **Formula de conversión grados a radianes**

```
radianes = grados * (π / 180)
```

- **En JavaScript:**

```javaScript
const radian = degrees * (Math.PI / 180);
```

---

1. **Calcular Seno**

```
seno(θ) = cateto_opuesto / hipotenusa
```

- **En JavaScript:**

```JavaScript
const sine = Math.sin(angle * (Math.PI / 180));
```

---

2. **Calcular Coseno**

```
coseno(θ) = cateto_adyacente / hipotenusa
```

- **En JavaScript:**

```JavaScript
const cosine = Math.cos(angle * (Math.PI / 180));
```

---

3. **Calcular Tangente**

```
tangente(θ) = cateto_opuesto / cateto_adyacente
```

- **En JavaScript:**

```JavaScript
const tangent = Math.tan(angle * (Math.PI / 180));
```

---

4. **Calcular Potencia**

```
potencia = base ^ exponente
```

- **En JavaScript:**

```javaScript
const power = Math.pow(base, exponent);
// O también usando el operador ** → base ** exponent.
const power = base ** exponent;
```

---

5. **Calcular Raíz Cuadrada**

```
raíz_cuadrada(n) = x   tal que   x * x = n
```

- **En JavaScript:**

```JavaScript
const root = Math.sqrt(n);
```

---

## ✅ Entregable

Un archivo **`mathServices.js`** que contenga la clase y la prueba de los métodos.

Ejemplo:
```javaScript
const calculator = new MathServices();
console.log(calculator.calculateSine(30));
```

---

## 📜 Licencia

Distribuido bajo la licencia MIT. Consulte la sección «LICENCIA» para más información.
