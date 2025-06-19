Why use state ? 
- if you want to chanege your data in your component, (value can change dynamically) when some events happend
- Generally speaking, state is an object in reactJS to hold data related to a specific component and value of State can change dynamically 
- So State is object hold information to control the behavior of the component


Props vs State
- props --> la duoc pass vao cai component --> giong cai parameter duoc truyen vao cai function 
- con State la duoc chua ben trong mot cai mot cai component 
- state no giong nhu la 1 cai bien duoc khai bao trong 1 ham
- Noi chung muon thay doi du lieu trong mot cai component thi minh lam sao ? --> su dung state la duoc 



# Tìm Hiểu về `state` và `props` trong ReactJS

`state` và `props` là hai khái niệm cốt lõi và quan trọng nhất khi làm việc với React. Hiểu rõ sự khác biệt giữa chúng là chìa khóa để xây dựng các ứng dụng hiệu quả.

## Tại Sao Phải Dùng `state`?

Nói một cách đơn giản, **`state` là bộ nhớ của một component**. Nó chứa những dữ liệu mà component cần để hoạt động và dữ liệu này có thể thay đổi theo thời gian.

-   **Để cập nhật dữ liệu động:** Khi bạn muốn dữ liệu trong component của mình **thay đổi** để phản hồi lại một sự kiện nào đó (ví dụ: người dùng click chuột, gõ phím, nhận dữ liệu từ server), bạn phải dùng `state`.
-   **Để component "vẽ" lại (re-render):** Khi `state` thay đổi, React sẽ tự động "vẽ" lại giao diện của component để hiển thị dữ liệu mới. Đây là cơ chế hoạt động chính của React.
-   **Để kiểm soát hành vi của component:** `state` là một đối tượng (object) chứa thông tin để kiểm soát cách component hiển thị và hoạt động. Ví dụ: một popup có được hiển thị hay không (`state` là `isOpen`), một nút bấm có bị vô hiệu hóa hay không (`state` là `isDisabled`).

> **Tóm lại:** Nếu bạn muốn thay đổi dữ liệu bên trong một component, hãy dùng `state`.

## So sánh `props` và `state`

Để dễ hình dung, hãy xem bảng so sánh trực tiếp dưới đây.

| Đặc điểm | `props` (Properties) | `state` |
| :--- | :--- | :--- |
| **Nguồn gốc** | Được truyền từ component **cha** xuống component **con**. | Được quản lý và khởi tạo **bên trong** chính component đó. |
| **Ví dụ tương tự** | Giống như **tham số (parameters)** được truyền vào một hàm. | Giống như một **biến (variable)** được khai báo bên trong một hàm. |
| **Khả năng thay đổi**| **Bất biến (Immutable).** Component con **không thể** tự thay đổi `props` mà nó nhận được. | **Khả biến (Mutable).** Component có thể thay đổi `state` của chính nó (thông qua các hàm như `setState`). |
| **Mục đích sử dụng** | Dùng để truyền dữ liệu và cấu hình từ bên ngoài vào component. | Dùng để quản lý dữ liệu nội bộ, có thể thay đổi của component. |

### Ví dụ minh họa

Hãy xem một ví dụ đơn giản về một component `Greeting` nhận `props` và một component `Counter` quản lý `state` của riêng nó.

#### 1. Component dùng `props`

`props` (`name`) được truyền từ bên ngoài vào. Component `Greeting` chỉ nhận và hiển thị nó.

```jsx
// Component con
function Greeting({ name }) { // 'name' là props
  return <h1>Xin chào, {name}!</h1>;
}

// Component cha
function App() {
  // Truyền props 'name' vào component Greeting
  return <Greeting name="React Developer" />;
}