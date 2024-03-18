import { Link } from "../Link";
import style from "./style.module.css";
import { Links as typeLinks } from "../../../types/url";

type Props = {
  data: typeLinks[];
  onDelete: (id: string) => void;
  loading: boolean;
};

export const Links = ({ data, onDelete, loading }: Props) => {
  return (
    <>
      {loading ? (
        <h2 className={style.notUrl}>Cargando</h2>
      ) : (
        <>
          {data.length !== 0 ? (
            <table cellSpacing={0} className={style.links}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Url acortada</th>
                  <th>Url original</th>
                  <th>Creada</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((link) => (
                  <Link
                    link={link.original_url}
                    name={link.name}
                    key={link.short_url}
                    shorter={link.short_url}
                    createAt={link.createdAt}
                    onDelete={onDelete}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className={style.notUrl}>Aun no tienes urls acortadas</h2>
          )}
        </>
      )}
    </>
  );
};
