### Consultas sobre una tabla

1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
6. Devuelve un listado con el nombre de los todos los clientes españoles.
7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

- Utilizando la función [`YEAR` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_year).
- Utilizando la función [`DATE_FORMAT` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-format).
- Sin utilizar ninguna de las funciones anteriores.

1. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
2. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

- Utilizando la función [`ADDDATE` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_adddate).
- Utilizando la función [`DATEDIFF` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_datediff).
- ¿Sería posible resolver esta consulta utilizando el operador de suma `+` o resta `-`?

1. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.
2. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
3. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
4. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
5. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
6. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.