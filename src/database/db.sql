DROP DATABASE IF EXISTS tienda;

-- Articulos

DROP TABLE IF EXISTS articulos;

CREATE TABLE articulos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE articulos ADD COLUMN imagen VARCHAR(200) AFTER precio;


INSERT INTO articulos (id, nombre, descripcion, precio) VALUES
(1, 'Monitor 17 pulgadas', 'Monitor plano LCD', 110.22),
(2, 'Teclado', 'Teclado USB en español', 20.12),
(3, 'Impresora', 'Impresora láser a color', 360.05),
(4, 'Ratón óptico', 'Ratón USB con sensor óptico', 9.99),
(5, 'Altavoces', 'Altavoces estéreo para ordenador', 25.99),
(6, 'Disco duro externo 1TB', 'Disco duro USB 3.0 portátil', 54.99),
(7, 'Memoria USB 64GB', 'Pendrive USB 3.0', 12.99),
(8, 'Portátil 15 pulgadas', 'Portátil con procesador Intel i5', 589.99),
(9, 'Webcam HD', 'Cámara web 1080p con micrófono', 34.99),
(10, 'Auriculares', 'Auriculares con micrófono integrado', 28.99),
(11, 'Router Wi-Fi', 'Router inalámbrico doble banda', 45.99),
(12, 'Silla de oficina', 'Silla ergonómica regulable', 129.99),
(13, 'Mesa de escritorio', 'Mesa de oficina de madera', 189.99),
(14, 'Pantalla 24 pulgadas', 'Monitor LED Full HD', 179.99),
(15, 'Alfombrilla para ratón', 'Alfombrilla antideslizante', 4.99),
(16, 'Regleta eléctrica', 'Regleta con protección contra sobretensiones', 15.99),
(17, 'SAI / UPS', 'Sistema de alimentación ininterrumpida', 89.99),
(18, 'Tarjeta gráfica', 'Tarjeta gráfica dedicada 8GB', 329.99),
(19, 'Placa base', 'Placa base ATX compatible con Intel', 149.99),
(20, 'Procesador', 'Procesador Intel Core i7', 319.99),
(21, 'Memoria RAM 16GB', 'Memoria DDR4 16GB', 79.99),
(22, 'Fuente de alimentación', 'Fuente de alimentación 650W', 69.99),
(23, 'Caja de ordenador', 'Caja ATX con ventilación optimizada', 55.99);

-- Proveedores

DROP TABLE IF EXISTS proveedores;

CREATE TABLE proveedores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE proveedores ADD COLUMN imagen VARCHAR(200) AFTER descripcion;


INSERT INTO proveedores (id, nombre, descripcion) VALUES
(1, 'Proveedor Andino', 'Proveedor de productos agrícolas y fertilizantes'),
(2, 'Distribuidora Norte', 'Distribución de alimentos al por mayor'),
(3, 'TecnoGlobal S.A.', 'Venta de equipos tecnológicos y electrónicos'),
(4, 'ConstruMarket', 'Materiales y herramientas para la construcción'),
(5, 'Logística Express', 'Servicios de transporte y logística nacional'),
(6, 'Papelería Central', 'Suministros de oficina y papelería'),
(7, 'Farmadistrib', 'Distribución de productos farmacéuticos'),
(8, 'EcoProveedores', 'Productos ecológicos y biodegradables'),
(9, 'Textiles del Sur', 'Fabricación y distribución de textiles'),
(10, 'Servicios Industriales MX', 'Mantenimiento y servicios industriales');