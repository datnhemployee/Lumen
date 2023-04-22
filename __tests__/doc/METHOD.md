# Testing Methods

#### 1. White box: Funtional Testing

##### 1.1. Basic Path Testing

###### Target:

- make sure every independent paths run at least once.

###### Steps:

1. Build Flow Diagram
   `Flow Diagram = Nodes[i.e. Predicate Node, Normal Node = statement] + Edges`
2. `Complexity of f = Number of paths = V(G) = edges - nodes + 2p`
   `p = number of unconnected parts of the graph`
3. Pick `path`-s to test
4. Create test case (True|False) for every `path`.

###### How to do with Jest:

- Function:

  1.  Jest

- Renderer:

##### 1.2. Data-flow testing paths for each variable:

###### Target:

- Every variable, which priorly initialized, is used at least once.
- No being-used-without-priorly-initialized variable

###### Steps:

1. List all path by following types for each variable:

   - All-du paths (ADUP)
   - All-Uses (AU)
   - All-p-uses (APU)
   - All-c-uses (ACU)
   - All-p-uses / Some-c-uses (APU+C)
   - All-c-uses / Some-p-uses (ACU+P)
   - All-definition (AD)

2. Check if there are some of them are unsafe/ danger:
   - Danger path:
     - being used after being removed
     - being used before being defined
     - ...
3. If there are any danger paths, fix them and then, go to step-1.
4. Create test case for each path/ unsafe paths

###### Signatures:

    - d: defined, created, initialized
    - k: killed, terminated, undefined
    - u: used
    - c – used in a computation (sử dụng trong biểu thức tính toán)
    - p – used in a predicate (sử dụng trong các biểu thức điều kiện)
    - ~x: Cho biết trước khi tất cả hành động liên quan đến x
    - x~: Cho biết tất cả hành động không có thông báo liên quan đến x

##### Ref:

- https://viblo.asia/p/what-is-data-flow-testing-3Q75wxmQKWb
- [UIT] Bai 5.2_kiem-thu-hop-trang - [cuuduongthancong.com].pdf

#### 2. Black-box testing: Functional testing
