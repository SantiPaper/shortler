import { Link } from "../Link";
import style from "./style.module.css";
import { Links as typeLinks } from "../../../types/url";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  data: typeLinks[];
  onDelete: (id: string) => void;
};

export const Links = ({ data, onDelete }: Props) => {
  const { user, isLoading } = useAuth0();

  return (
    <>
      {isLoading ? (
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
                {user &&
                  data.map((link) => (
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
            <h2 className={style.notUrl}>No tienes urls acortadas</h2>
          )}
        </>
      )}
    </>
  );
};
