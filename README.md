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
    message: "El seno de 30° es 0.5",
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

\[
radianes = grados \times \frac{\pi}{180}
\]

- **En JavaScript:**
```javaScript
    radian = degrees * (Math.PI / 180);
```

---

1. **Calcular Seno**

\[
\sin(\theta) = \frac{ \text{cateto opuesto} }{ \text{hipotenusa} }
\]

- **En JavaScript:**

\[
\sin(\theta) = Math.sin\left( \theta \times \frac{\pi}{180} \right)
\]

---

2. **Calcular Coseno**

\[
\cos(\theta) = \frac{ \text{cateto adyacente} }{ \text{hipotenusa} }
\]

- **En JavaScript:**

\[
\cos(\theta) = Math.cos\left( \theta \times \frac{\pi}{180} \right)
\]

---

3. **Calcular Tangente**

\[
\tan(\theta) = \frac{ \text{cateto opuesto} }{ \text{cateto adyacente} }
\]

- **En JavaScript:**

\[
\tan(\theta) = Math.tan\left( \theta \times \frac{\pi}{180} \right)
\]

---

4. **Calcular Potencia**

\[
\text{Potencia} = \text{base}^{\text{exponente}}
\]

- **En JavaScript:**

\[
\text{Potencia} = Math.pow(\text{base}, \text{exponente})
\]

(O también usando el operador `**` → `base ** exponente`).

---

5. **Calcular Raíz Cuadrada**

\[
\sqrt{n} = x \quad \text{tal que} \quad x^2 = n
\]

- **En JavaScript:**

\[
\sqrt{n} = Math.sqrt(n)
\]

---

## ✅ Entregable

Un archivo **`mathServices.js`** que contenga la clase y la prueba de los métodos.

Ejemplo:
```javaScript
const menu = new MathServices();
console.log(menu.calculateSine(30));
```

---

## 📜 Licencia

Distribuido bajo la licencia MIT. Consulte la sección «LICENCIA» para más información.